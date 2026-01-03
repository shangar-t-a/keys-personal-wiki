---
sidebar_label: 'Running Ollama in GPU'
sidebar_level: 2
---

# GPU Setup for Local Models with UV

This document provides a guide on how to set up GPU support for local models while using UV dependency manager.
This setup is essential for leveraging the computational power of GPUs while using local models in the application.

UV provides a guide for setting up GPU support for local models, which can be found in [uv-pytorch-setup](https://docs.astral.sh/uv/guides/integration/pytorch/).

## Prerequisites

- Ensure you have a compatible GPU installed on your machine.
- Run the below command in your terminal to check if your GPU is recognized:

  ```bash
  nvidia-smi
  ```

  Note down the CUDA version displayed in the output, as it will be needed for the next steps.

## Setup

1. Add the below lines to your `pyproject.toml` file to include the necessary dependencies for GPU support:

   ```toml
   dependencies = [
       "torch>=2.8.0",
       "torchvision>=0.23.0",
   ]

   [tool.uv.sources]
   torch = { index = "pytorch-cu129" }
   torchvision = { index = "pytorch-cu129" }

   [[tool.uv.index]]
   name = "pytorch-cu129"
   url = "https://download.pytorch.org/whl/cu129"
   explicit = true
   ```

   Use the appropriate CUDA version in the URL based on your GPU's CUDA version.
   The package versions mentioned above are the latest available as of October 5, 2025.

2. Install the dependencies using UV:

   ```bash
   uv sync
   ```

   Remove existing lock file and .venv to ensure a clean installation.

3. Run the following command inside the virtual environment to verify that PyTorch is using the GPU:

   ```python
   python -c "import torch; print(torch.__version__); print(torch.cuda.is_available())"
   ```

   The output pytorch version should have a suffix like `+cu129` indicating CUDA 12.9 support, and
   `torch.cuda.is_available()` should return `True`.

## Last Tested Approach (December 30, 2025)

Operating System: Windows 11
CUDA Version: 12.8
Local Model Orchestrator: Ollama (0.12.6)

1. This approach assumes NIVIDIA drivers and CUDA toolkit are already installed and available.
2. This setup assumes you are using UV as the dependency manager. If not applicable please skip any details referring
   to UV.
3. UV Specific Steps:
   - Does not require adding gpu extra in the dependencies section.
   - Remove any existing cpu/gpu extra sources for torch and torchvision.
4. Launch PowerShell terminal and run the following commands to serve Ollama in GPU mode:

   ```powershell
   $env:OLLAMA_HOST = "0.0.0.0:11434"
   $env:CUDA_VISIBLE_DEVICES="0"
   $env:OLLAMA_NUM_GPU="1"
   $env:OLLAMA_GPU_LAYERS="100"
   ollama serve
   ```

:::info
The set environment variables are only valid for the current terminal session.
:::
