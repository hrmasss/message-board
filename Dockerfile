FROM python:3.12-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential \
  libpq-dev \
  curl \
  nodejs \
  npm \
  && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Add Poetry to PATH
ENV PATH="/root/.local/bin:$PATH"

# Set environment variables
ENV PYTHONUNBUFFERED=1 \
  POETRY_VIRTUALENVS_CREATE=false

# Copy Poetry files and install dependencies
COPY pyproject.toml poetry.lock ./
RUN poetry install --no-root --with dev

# Explicitly install gunicorn
RUN pip install gunicorn

# Copy application code
COPY . .

# Install tailwind dependencies and build CSS
RUN python manage.py tailwind install && \
  python manage.py tailwind build

# Collect static files
RUN python manage.py collectstatic --noinput

# Set permissions
RUN useradd -m -u 1000 app && chown -R app:app /app

# Switch to non-root user
USER app

# Create volume for static files
VOLUME ["/app/staticfiles"]

# Expose port
EXPOSE 8000

# Run gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "core.wsgi:application"]
