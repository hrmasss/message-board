# Anonymous Message Board

A Django-based web application that allows users to post anonymous messages in a bulletin board style interface. Built with Django, Tailwind CSS, and HTMX for a modern, responsive user experience with real-time updates.

## Features

-   **Anonymous Posting**: Post messages without registration
-   **Real-time Updates**: Messages appear instantly using HTMX
-   **Responsive Design**: Mobile-friendly interface using Tailwind CSS
-   **Docker Support**: Easy deployment with Docker and Docker Compose

## Project Setup

### Prerequisites

-   Python 3.12+
-   [Poetry](https://python-poetry.org/docs/#installation)
-   Node.js and npm (for Tailwind CSS)
-   Docker and Docker Compose (optional)

### Installation

#### Option 1: Local Development Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/hrmasss/message-board.git
    cd message-board
    ```

2. **Set Up Environment Variables**

    ```bash
    cp .env.example .env
    ```

3. **Using Poetry (Recommended)**

    ```bash
    # Install dependencies
    poetry install

    # Activate virtual environment
    poetry shell

    # Install Tailwind dependencies
    python manage.py tailwind install

    # Apply migrations
    python manage.py migrate
    ```

4. **Using pip (Alternative)**

    ```bash
    # Create virtual environment
    python -m venv venv
    source venv/bin/activate  # Linux/MacOS
    venv\Scripts\activate     # Windows

    # Install dependencies
    pip install -r requirements.txt

    # Follow steps for Tailwind and migrations as above
    ```

5. **Run Development Servers**

    ```bash
    # Terminal 1: Django development server
    python manage.py runserver

    # Terminal 2: Tailwind CSS compiler
    python manage.py tailwind start
    ```

#### Option 2: Docker Development Setup

1. **Build and Start Services**

    ```bash
    docker-compose up --build
    ```

2. **Run Migrations**
    ```bash
    docker-compose exec web python manage.py migrate
    ```

### Production Deployment

1. **Build Production Image**

    ```bash
    docker build -t message-board:latest .
    ```

2. **Run Production Stack**
    ```bash
    docker-compose -f docker-compose.prod.yml up -d
    ```

## Project Structure

```
message-board/
├── core/                   # Django project settings
│   └── ...
├── message_board/          # Main application
│   ├── static/             # Static files
│   ├── templates/          # HTML templates
│   ├── models.py           # Database models
│   └── views.py            # View logic
├── tailwind_theme/         # Tailwind CSS configuration
├── docker/                 # Docker configuration files
├── .dockerignore
├── .env.example
├── .gitignore
├── docker-compose.yml      # Development compose
├── docker-compose.prod.yml # Production compose
├── Dockerfile
├── README.md
├── pyproject.toml          # Poetry configuration
└── requirements.txt        # Pip requirements
```

## Development

### Running Tests

```bash
# Run tests
python manage.py test

# With coverage
coverage run manage.py test
coverage report
```

### Building Static Files

```bash
# Development
python manage.py tailwind start

# Production
python manage.py tailwind build
python manage.py collectstatic --noinput
```

## Docker Usage

### Development

```bash
# Start development environment
docker-compose up --build

# Run migrations
docker-compose exec web python manage.py migrate
```

### Production

```bash
# Build and run production stack
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Scale web workers
docker-compose -f docker-compose.prod.yml up --scale web=3 -d
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
