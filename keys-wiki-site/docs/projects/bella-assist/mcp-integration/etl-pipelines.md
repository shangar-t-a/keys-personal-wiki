---
sidebar_level: 3
sidebar_label: 'ETL Pipelines'
sidebar_position: 3
description: 'ETL Ingestion Pipelines for AI Semantic Memory'
---

# ETL Ingestion Pipelines

The ETL Pipelines compile unstructured markdown documentation into vector embeddings to populate the assistant's semantic knowledge base.

---

## Processing Flow

The data pipeline runs through three core stages:

```mermaid
graph LR
    LocalFiles["Local Markdown Docs"] -->|Extract| Parser["Markdown Loader"]
    Parser -->|Transform| Split["Recursive Character Splitter"]
    Split -->|Embed| Embedder["Embedding Model"]
    Embedder -->|Load| VectorDB["Qdrant DB (Host)"]
```

### Extraction

- Scrapes documentation, guides, and text configuration sheets from target directories.
- Skips build directories, images, and binary assets.

### Transformation

- **Text Splitting**: Splits long files into chunks based on token density while preserving headers and code syntax blocks.
- **Metadata Annotation**: appends relative file paths, categories, and structure details to each segment.
- **Embeddings**: Converts text blocks into dense vector arrays using configured embedding models.

### Loading

- Pushes vectors and text payloads to the Qdrant database.
- Constructs schema indices to enable vector similarity queries.

---

## Container Setup

The ingestion pipeline runs inside a Docker container to isolate dependency packages (such as PyTorch and tokenizers), while interfacing directly with the native Qdrant port:

```env
QDRANT_URL=http://host.docker.internal:6333
```
