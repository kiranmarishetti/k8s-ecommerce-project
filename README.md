# 🚀 Kubernetes eCommerce Platform with CI/CD & Monitoring

A production-style DevOps project demonstrating deployment of a containerized eCommerce application on a multi-node Kubernetes cluster with Jenkins CI and monitoring using Prometheus & Grafana.

---

# 📌 Project Overview

This project demonstrates an end-to-end Kubernetes deployment on AWS EC2. The application consists of a frontend, backend, and MySQL database deployed on a multi-node Kubernetes cluster. Jenkins is used for Continuous Integration, Docker for containerization, and Prometheus with Grafana for monitoring.

---

# 🏗️ Architecture

```
                    GitHub Repository
                           │
                           ▼
                     Jenkins Pipeline
                           │
                           ▼
                 Source Code Checkout
                           │
                           ▼
                  Docker Image Build
                           │
                           ▼
                     Kubernetes Cluster
               ┌─────────────────────────┐
               │    Control Plane Node   │
               └─────────────────────────┘
                    │              │
                    ▼              ▼
              Worker Node 1   Worker Node 2

        Frontend      Backend + MySQL

                    │
                    ▼
          Prometheus & Grafana
```

---

# ⚙️ Tech Stack

| Category | Technology |
|----------|------------|
| Cloud | AWS EC2 |
| OS | Ubuntu Linux |
| Containerization | Docker |
| Orchestration | Kubernetes (kubeadm) |
| CI | Jenkins |
| Monitoring | Prometheus & Grafana |
| Version Control | Git & GitHub |
| Backend | Node.js + Express |
| Database | MySQL |
| Web Server | Nginx |

---

# 📂 Project Structure

```
k8s-ecommerce-project/
├── backend/
├── frontend/
├── mysql/
├── ingress/
├── monitoring/
├── jenkins/
├── screenshots/
├── Jenkinsfile
└── README.md
```

---

# ✨ Features

- Multi-node Kubernetes Cluster
- Dockerized Backend Application
- Jenkins CI Pipeline
- Kubernetes Deployments
- Services
- ConfigMaps
- Secrets
- Persistent Volumes
- Persistent Volume Claims
- Ingress Controller
- Prometheus Monitoring
- Grafana Dashboards

---

# 🚀 Deployment Workflow

1. Launch AWS EC2 instances
2. Configure Kubernetes cluster
3. Deploy MySQL
4. Deploy Backend
5. Deploy Frontend
6. Configure Services
7. Configure Ingress
8. Configure Jenkins
9. Configure Prometheus & Grafana
10. Verify Application

---

# 🔄 Jenkins Pipeline

- Checkout Source Code
- Verify Kubernetes Manifests
- Deploy to Kubernetes
- Verify Running Pods

---

# 📊 Monitoring

Monitoring includes:

- Prometheus
- Grafana
- Node Metrics
- Pod Metrics
- CPU Usage
- Memory Usage
- Cluster Health

---

# 📸 Project Screenshots

Project screenshots are available in the **screenshots/** directory.

---

# 💡 Future Enhancements

- Automated Docker Build
- Docker Hub Push
- Helm Charts
- ArgoCD
- SonarQube
- Trivy Image Scanning
- Slack Notifications

---

# 👨‍💻 Author

**Kiran Marishetti**

DevOps | AWS | Docker | Kubernetes | Jenkins | Linux

GitHub:
https://github.com/kiranmarishetti
