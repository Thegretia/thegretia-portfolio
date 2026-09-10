import { CaseStudy } from "@/lib/types";

export const projects: CaseStudy[] = [
  {
    slug: "akilang-speech-translation",
    title: "Akilang Speech & Translation Engine",
    tagline: "Low-resource African languages ASR and Neural Machine Translation system",
    category: "AI & ML",
    featured: true,
    summary:
      "A high-performance multilingual Automatic Speech Recognition (ASR) and Neural Machine Translation (NMT) platform designed specifically for under-represented African languages, achieving high transcription accuracy and low-latency inference.",
    role: "Lead AI & ML Engineer",
    timeline: "6 Months • 2025",
    technologies: [
      "PyTorch",
      "Hugging Face",
      "Whisper & Wav2Vec2",
      "FastAPI",
      "Docker",
      "ONNX Runtime",
      "Python",
    ],
    githubUrl: "https://github.com/thegreatia/akilang-engine",
    liveUrl: "https://akilang-demo.thegretia.dev",
    metrics: [
      {
        label: "WER Reduction",
        value: "28.4%",
        description: "Reduction in Word Error Rate compared to baseline foundation models",
      },
      {
        label: "Inference Latency",
        value: "< 140ms",
        description: "P95 streaming audio chunk processing on quantized ONNX CPU runtime",
      },
      {
        label: "Dataset Scale",
        value: "450+ Hours",
        description: "Curated, filtered, and augmented multilingual speech corpus",
      },
      {
        label: "Active Languages",
        value: "6 Dialects",
        description: "Fully benchmarked African dialect pairs with zero data leakage",
      },
    ],
    challenge: {
      context:
        "Standard commercial speech models (e.g., vanilla Whisper, Google Cloud Speech) exhibit significant degradation in accuracy (WER > 45%) when processing low-resource African languages due to sparse training datasets, distinct phoneme distributions, and code-switching.",
      coreProblem:
        "Building a reliable speech-to-text and machine translation pipeline requires solving severe acoustic data scarcity, domain misalignment, and deploying models on constrained compute resources without ballooning infrastructure costs.",
      objectives: [
        "Curate and augment a balanced multi-speaker audio dataset across target regional dialects.",
        "Fine-tune parameter-efficient adapter layers (LoRA/PEFT) on top of Wav2Vec2 and Whisper architectures.",
        "Quantize and export the computational graph to ONNX/TensorRT for low-latency production serving.",
        "Build a production-grade FastAPI streaming gateway with chunked audio decoding.",
      ],
    },
    systemArchitecture: {
      overview:
        "The system consists of an automated data synthesis & augmentation pipeline, distributed multi-GPU training with PyTorch/Accelerate, FP16/INT8 ONNX model optimization, and a lightweight asynchronous FastAPI serving microservice.",
      diagramDescription:
        "Audio Stream → Resampling & Feature Extraction (Log-Mel Spectrograms) → Wav2Vec2/Whisper Encoder with Dialect Adapters → Beam Search CTC Decoder → NMT Seq2Seq Translation → Streaming JSON Response",
      steps: [
        {
          stepNumber: 1,
          title: "Audio Ingestion & Pre-processing Pipeline",
          description:
            "Implemented an automated pipeline with Torchaudio and Librosa that handles silence trimming, loudness normalization (EBU R128), and on-the-fly SpecAugment data augmentation (time masking, frequency masking).",
          tech: ["Torchaudio", "Librosa", "NumPy", "Python"],
        },
        {
          stepNumber: 2,
          title: "Acoustic Modeling & Parameter-Efficient Fine-Tuning",
          description:
            "Fine-tuned Whisper-Medium and Wav2Vec2-XLSR using PyTorch Distributed Data Parallel (DDP) and Low-Rank Adaptation (LoRA), preserving pre-trained acoustic priors while specializing in tonal language phonetics.",
          tech: ["PyTorch", "Hugging Face Transformers", "PEFT", "Accelerate"],
        },
        {
          stepNumber: 3,
          title: "Model Compression & ONNX Graph Optimization",
          description:
            "Exported PyTorch weights into ONNX format, applied static 8-bit quantization (INT8), and fused attention operators to achieve a 3.4x throughput boost on x86 server hardware without noticeable accuracy loss.",
          tech: ["ONNX Runtime", "Optimum", "TorchScript"],
        },
        {
          stepNumber: 4,
          title: "Async Microservice & WebSocket Streaming",
          description:
            "Engineered a high-concurrency FastAPI microservice utilizing WebSockets for bidirectional chunked audio streaming with a rolling ring-buffer to decode continuous speech in near real-time.",
          tech: ["FastAPI", "WebSockets", "Asyncio", "Docker"],
        },
      ],
    },
    technicalObstacles: [
      {
        obstacle:
          "High Word Error Rate (WER) caused by background acoustic noise and diverse recording hardware in field data.",
        solution:
          "Synthesized noise-augmented audio using dynamic SNR mixing with synthetic room impulse responses (RIRs) and background street noise, boosting model resilience by 18% on noisy benchmarks.",
      },
      {
        obstacle:
          "Severe GPU memory bottlenecks during full fine-tuning of 1.5B parameter models.",
        solution:
          "Adopted FlashAttention-2, 8-bit AdamW optimizers, and gradient checkpointing, reducing GPU VRAM allocation from 48GB to 14GB per worker.",
      },
      {
        obstacle:
          "High tail latency (P99 > 850ms) during autoregressive token generation in the decoder.",
        solution:
          "Integrated speculative decoding with a lightweight draft CTC model combined with dynamic key-value (KV) cache reuse in ONNX Runtime, slashing P99 latency to under 180ms.",
      },
    ],
    impactAndResults: {
      summary:
        "The Akilang Engine powers real-time transcription and translation workflows with industry-leading accuracy on low-resource dialects, enabling inclusive voice interfaces and localized educational tools.",
      keyPoints: [
        "Achieved state-of-the-art transcription performance with a 28.4% WER reduction over stock foundation models.",
        "Lowered server operational compute costs by 65% through INT8 CPU graph quantization.",
        "Successfully served 10,000+ daily streaming audio requests with 99.95% uptime.",
      ],
    },
  },
  {
    slug: "cloud-scale-lakehouse-etl",
    title: "Cloud-Scale Lakehouse ETL Pipeline",
    tagline: "Medallion architecture on Azure Databricks, PySpark, and Delta Lake",
    category: "Data Engineering",
    featured: true,
    summary:
      "An enterprise-grade Lakehouse data pipeline ingesting multi-source transactional and telemetry data into Bronze, Silver, and Gold Delta Lake tables with automated schema enforcement, dbt transformations, and data quality observability.",
    role: "Lead Data Engineer & Architect",
    timeline: "8 Months • 2024 - 2025",
    technologies: [
      "Azure Databricks",
      "PySpark",
      "Delta Lake",
      "dbt-core",
      "Azure Data Factory",
      "SQL",
      "Great Expectations",
      "Terraform",
    ],
    githubUrl: "https://github.com/thegreatia/lakehouse-pyspark-pipeline",
    liveUrl: "https://lakehouse-arch.thegretia.dev",
    metrics: [
      {
        label: "Data Volume Processed",
        value: "2.4 TB / Day",
        description: "Continuous ingestion and transformation across 80+ data streams",
      },
      {
        label: "ETL Runtime Reduction",
        value: "54%",
        description: "Optimized partition pruning and Z-Order indexing cuts batch runtime in half",
      },
      {
        label: "Query Speedup",
        value: "4.8x",
        description: "Downstream BI analytics dashboard load speed on Gold tables",
      },
      {
        label: "Data Quality SLA",
        value: "99.98%",
        description: "Zero silent data corruptions with automated circuit-breaker assertions",
      },
    ],
    challenge: {
      context:
        "Legacy batch jobs running on relational SQL data warehouses suffered from skyrocketing compute costs, frequent pipeline failures during schema drifts, and 6+ hour delays in delivering business intelligence reports.",
      coreProblem:
        "The organization required a unified Lakehouse platform capable of handling semi-structured JSON telemetry alongside ACID relational CDC records with strict data governance, lineage tracking, and sub-hour freshness SLAs.",
      objectives: [
        "Architect a scalable Medallion (Bronze/Silver/Gold) architecture on Azure Databricks.",
        "Build robust PySpark streaming and batch ingestion jobs with automatic schema evolution.",
        "Implement dbt models for dimensional modeling (Kimball Star Schema) in the Gold layer.",
        "Integrate automated data quality testing with Great Expectations and alerting webhooks.",
      ],
    },
    systemArchitecture: {
      overview:
        "Data is captured from relational DBs via Debezium CDC and IoT telemetry via Azure Event Hubs, landed in ADLS Gen2 Bronze raw format, standardized and deduplicated into Silver Delta tables, and aggregated into dimensional Gold marts via dbt.",
      diagramDescription:
        "Event Hubs / CDC Kafka → Bronze ADLS Gen2 (Raw Parquet/Delta) → PySpark Sanitization & Deduplication → Silver Layer (Enriched Delta) → dbt Dimensional Modeling & Great Expectations → Gold Layer (Star Schema Marts) → Power BI & Analytics Consumers",
      steps: [
        {
          stepNumber: 1,
          title: "Bronze Ingestion with Auto Loader",
          description:
            "Configured Databricks Auto Loader to incrementally ingest raw JSON and CSV files from Azure Data Lake Storage Gen2 with cloud notification mode and schema rescue columns.",
          tech: ["Azure Databricks", "Auto Loader", "PySpark", "ADLS Gen2"],
        },
        {
          stepNumber: 2,
          title: "Silver Layer Cleansing & CDC Merge",
          description:
            "Developed PySpark jobs applying Delta Lake MERGE operations for Type 2 Slowly Changing Dimensions (SCD2), timestamp alignment, deduplication, and PII masking.",
          tech: ["PySpark", "Delta Lake", "Python"],
        },
        {
          stepNumber: 3,
          title: "Gold Layer Modeling with dbt",
          description:
            "Constructed Kimball dimensional models (Facts and Conformed Dimensions) using dbt-databricks, executing automated documentation generation and dependency DAG scheduling.",
          tech: ["dbt-core", "SQL", "Databricks SQL Warehouse"],
        },
        {
          stepNumber: 4,
          title: "Data Observability & Orchestration",
          description:
            "Implemented circuit breaker checks using Great Expectations to block corrupted batches, with orchestrations managed via Azure Data Factory and Databricks Asset Bundles.",
          tech: ["Great Expectations", "Azure Data Factory", "Terraform", "GitHub Actions"],
        },
      ],
    },
    technicalObstacles: [
      {
        obstacle:
          "Severe 'Small File Problem' in the Bronze layer causing slow read performance and excessive metadata overhead on the driver node.",
        solution:
          "Configured Delta Lake auto-compaction and optimized writes (`spark.databricks.delta.optimizeWrite.enabled = true`) combined with scheduled daily VACUUM and OPTIMIZE jobs with Z-Ordering on primary query predicates.",
      },
      {
        obstacle:
          "Unannounced schema changes from upstream source databases causing downstream pipeline crashes.",
        solution:
          "Leveraged Delta Schema Evolution with `_rescued_data` column capture in Auto Loader, gracefully routing unrecognized columns to staging quarantine tables without halting pipeline execution.",
      },
      {
        obstacle:
          "Spiking compute costs on Databricks clusters during uneven streaming traffic spikes.",
        solution:
          "Configured aggressive single-node cluster autoscaling with Azure spot VM instances for worker pools, driving a 38% reduction in monthly cloud infrastructure spend.",
      },
    ],
    impactAndResults: {
      summary:
        "The Lakehouse architecture replaced legacy siloed warehouses with a unified, high-performance platform that slashed operational costs and accelerated business reporting cycles.",
      keyPoints: [
        "Decreased end-to-end data pipeline latency from 6 hours to under 25 minutes.",
        "Delivered $140,000 annual savings in cloud infrastructure compute licensing.",
        "Enabled self-serve business intelligence for 120+ analysts across 4 business units.",
      ],
    },
  },
  {
    slug: "streaming-fraud-detection",
    title: "Real-Time Streaming Fraud Detection Engine",
    tagline: "Sub-50ms financial transaction anomaly scoring with PySpark and Redis",
    category: "AI & ML",
    featured: true,
    summary:
      "A distributed real-time streaming ML pipeline processing payment streams via Apache Kafka, computing real-time feature aggregations in Redis, and executing XGBoost anomaly classification under strict latency SLAs.",
    role: "Data & ML Engineer",
    timeline: "5 Months • 2024",
    technologies: [
      "Apache Kafka",
      "PySpark Streaming",
      "Redis",
      "XGBoost",
      "FastAPI",
      "Docker",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/thegreatia/realtime-fraud-stream",
    liveUrl: "https://fraud-stream.thegretia.dev",
    metrics: [
      {
        label: "Processing Latency",
        value: "38ms",
        description: "End-to-end P99 inference latency from message ingestion to verdict",
      },
      {
        label: "Throughput",
        value: "14,000 txn/s",
        description: "Sustained throughput under distributed load testing",
      },
      {
        label: "Precision Score",
        value: "96.2%",
        description: "Precision on flagged suspicious transactions with low false positive rate",
      },
      {
        label: "Fraud Loss Prevented",
        value: "$1.8M+",
        description: "Simulated annual chargeback prevention based on benchmark replay",
      },
    ],
    challenge: {
      context:
        "Financial institutions lose millions annually to fraudulent payment activities. Traditional batch fraud reviews identify illicit behavior hours after transactions settle, making real-time interception impossible.",
      coreProblem:
        "Detecting fraud in flight requires evaluating complex multi-window velocity features (e.g., number of cards used across 10 minutes, geographic velocity) within a strict sub-50ms window before the payment gateway authorization times out.",
      objectives: [
        "Ingest high-velocity transactional events from Apache Kafka with zero message loss.",
        "Calculate real-time streaming feature vectors using Redis sliding window data structures.",
        "Serve an optimized gradient-boosted decision tree model (XGBoost) for instant scoring.",
        "Provide an asynchronous audit trail and alerting webhook for compliance teams.",
      ],
    },
    systemArchitecture: {
      overview:
        "Kafka distributes incoming payment events across PySpark Streaming consumers, which update Redis sorted-set sliding windows, construct the feature vector, run ML inference, and publish decision outcomes back to payment gateways.",
      diagramDescription:
        "Payment Gateway → Kafka Cluster → PySpark Structured Streaming → Redis Online Feature Store → XGBoost C++ Inference Engine → Kafka Verdict Topic → PostgreSQL Audit Store & Grafana Live Dashboard",
      steps: [
        {
          stepNumber: 1,
          title: "Kafka Event Stream Ingestion",
          description:
            "Implemented a multi-partition Kafka topic cluster with exactly-once consumer semantics and Avro schema validation to ensure strictly typed transaction payloads.",
          tech: ["Apache Kafka", "Confluent Schema Registry", "Avro"],
        },
        {
          stepNumber: 2,
          title: "Low-Latency Sliding Window Feature Store",
          description:
            "Engineered custom Redis Lua scripts utilizing Sorted Sets (`ZADD`, `ZREMRANGEBYSCORE`) to maintain rolling 1-hour transaction frequencies and velocity counters with sub-millisecond retrieval.",
          tech: ["Redis", "Lua", "PySpark Streaming"],
        },
        {
          stepNumber: 3,
          title: "XGBoost Anomaly Classification",
          description:
            "Trained an XGBoost model with focal loss to counter severe 1:1000 class imbalance, tuned using Bayesian optimization, and compiled to native C++ shared library for zero-overhead inference.",
          tech: ["XGBoost", "Scikit-Learn", "Python", "C++"],
        },
        {
          stepNumber: 4,
          title: "Audit Logging & Observability",
          description:
            "Persisted all scored records with explainability features (SHAP values) into partitioned PostgreSQL tables and visualized system metrics in Prometheus/Grafana.",
          tech: ["PostgreSQL", "Prometheus", "Grafana", "Docker"],
        },
      ],
    },
    technicalObstacles: [
      {
        obstacle:
          "Extreme class imbalance (fraudulent transactions represented <0.12% of total volume), causing standard classifiers to generate high false positives.",
        solution:
          "Applied SMOTE-NC on tabular categorical features, tuned decision thresholds via precision-recall curve analysis, and implemented an ensemble layer combining Isolation Forest with cost-sensitive XGBoost.",
      },
      {
        obstacle:
          "Redis network bottleneck when making multiple roundtrip queries per transaction.",
        solution:
          "Batched feature updates using Redis Pipelining and compiled transactional validation into atomic Lua scripts executed on the Redis server in a single network hop.",
      },
    ],
    impactAndResults: {
      summary:
        "Delivered a production-ready streaming anomaly detection platform that satisfies stringent financial SLA requirements while offering deep explainability for compliance audits.",
      keyPoints: [
        "Achieved a 38ms P99 latency SLA under heavy sustained load.",
        "Reduced false positive alert volume by 42%, dramatically improving human reviewer efficiency.",
        "Constructed automated CI/CD model retraining pipelines with GitHub Actions and MLflow.",
      ],
    },
  },
  {
    slug: "distributed-task-orchestrator",
    title: "Distributed Python Async Task Engine",
    tagline: "Resilient worker pool architecture with priority queueing and telemetry",
    category: "Software Engineering",
    featured: false,
    summary:
      "A lightweight, fault-tolerant distributed background job orchestrator written in modern Python with Redis persistence, intelligent retry exponential backoff, dead-letter queuing, and OpenTelemetry distributed tracing.",
    role: "Software (Python) Engineer",
    timeline: "4 Months • 2024",
    technologies: [
      "Python 3.12",
      "Asyncio",
      "Redis",
      "FastAPI",
      "OpenTelemetry",
      "Docker",
      "Pytest",
    ],
    githubUrl: "https://github.com/thegreatia/python-task-orchestrator",
    liveUrl: "https://orchestrator-demo.thegretia.dev",
    metrics: [
      {
        label: "Task Throughput",
        value: "25,000+ / min",
        description: "Processed concurrent jobs across lightweight async worker nodes",
      },
      {
        label: "Memory Footprint",
        value: "< 45 MB",
        description: "Base memory usage per worker process compared to Celery (>120MB)",
      },
      {
        label: "Retry Reliability",
        value: "99.999%",
        description: "Zero lost tasks during unexpected worker node terminations",
      },
    ],
    challenge: {
      context:
        "Off-the-shelf distributed queue frameworks (such as heavy Celery configurations) introduced significant memory bloat, fragile state recovery, and high debugging complexity for microservice workloads.",
      coreProblem:
        "The application required an ultra-lean, asyncio-native Python task engine with fine-grained priority queues, graceful cancellation, and transparent distributed tracing.",
      objectives: [
        "Design an asyncio-first worker execution model with priority levels.",
        "Implement reliable message acknowledgments using Redis streams and visibility timeouts.",
        "Support automated retry policies with jittered exponential backoffs.",
        "Provide an intuitive developer decorator API (`@task(priority='high', retries=3)`).",
      ],
    },
    systemArchitecture: {
      overview:
        "Clients dispatch tasks through a type-safe Python SDK or REST API into Redis priority streams. Async worker nodes pull available jobs, acquire distributed locks, execute non-blocking coroutines, and publish telemetry spans.",
      diagramDescription:
        "FastAPI Producer → Redis Streams (Priority Buckets) → Worker Fleet (Asyncio Event Loops) → Heartbeat & Health Monitor → Dead Letter Queue / Success Result Store → Jaeger Tracing UI",
      steps: [
        {
          stepNumber: 1,
          title: "Task Serialization & Dispatch",
          description:
            "Created a zero-copy Msgpack serializer and decorator interface for registering asynchronous task handlers with runtime type-checking via Pydantic V2.",
          tech: ["Python 3.12", "Pydantic V2", "Msgpack"],
        },
        {
          stepNumber: 2,
          title: "Redis Consumer Group Architecture",
          description:
            "Implemented consumer groups with `XREADGROUP` and `XACK` guarantees, along with a claim loop (`XAUTOCLAIM`) to reassign orphaned tasks if a worker crashes.",
          tech: ["Redis 7.2", "Redis-py", "Asyncio"],
        },
        {
          stepNumber: 3,
          title: "Distributed Tracing & Metrics",
          description:
            "Integrated OpenTelemetry hooks to inject and extract trace context across asynchronous process boundaries, visualizing latency bottlenecks in Jaeger and Grafana.",
          tech: ["OpenTelemetry", "Prometheus", "Jaeger"],
        },
      ],
    },
    technicalObstacles: [
      {
        obstacle:
          "Worker starvation when long-running blocking CPU-bound tasks froze the asynchronous event loop.",
        solution:
          "Dynamically offloaded synchronous or CPU-intensive execution blocks to a bounded `ProcessPoolExecutor` while keeping I/O network operations on the native asyncio loop.",
      },
    ],
    impactAndResults: {
      summary:
        "Engineered an enterprise-grade async queueing engine that provides extreme performance, sub-second error recovery, and clear developer ergonomics.",
      keyPoints: [
        "60% reduction in worker memory overhead compared to legacy frameworks.",
        "Adopted across 12 microservices with 0 critical production regressions.",
        "Achieved 100% test coverage with comprehensive pytest-asyncio integration suites.",
      ],
    },
  },
];
