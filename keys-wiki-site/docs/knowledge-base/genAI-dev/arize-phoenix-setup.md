# Arize Phoenix Setup Guide

Arize Phoenix is a observability tool for monitoring and debugging llm traffic. This guide provides instructions on
enabling Arize Phoenix across different llm frameworks.

## Pre Read

1. This document focusses on setting up Arize Phoenix custom deployment or local deployment.
2. Wherever applicable, uv dependency manager is mentioned for installing the required packages. Please, use relevant
   package manager as per your project setup.
3. Each section mentions a documented date and upon updates the instructions might need changes. Please, refer back
   official documentation when needed.

## Arize Phoenix Setup for LangChain / LangGraph

Documented Date: January 03, 2026

1. Install the Arize Phoenix package using uv:

   ```bash
   uv add arize-phoenix
   ```

2. Install the LangChain Phoenix integration package:

   ```bash
   uv add openinference-instrumentation-langchain
   ```

3. Launch the Arize Phoenix server:

   ```bash
   uv run python -m phoenix.server.main serve
   ```

4. Add the below code snippet to your LangChain or LangGraph application:

   ```python
   from phoenix.otel import register

   # configure the Phoenix tracer
   tracer_provider = register(
     endpoint="http://localhost:6006/v1/traces",
     project_name="keys-langgraph-exp", # Default is 'default'
     auto_instrument=True # Auto-instrument your app based on installed OI dependencies
   )
   ```

:::info
Tested with LangGraph.  <br></br>
Used Arize Phoenix version 12.27.0.
:::
