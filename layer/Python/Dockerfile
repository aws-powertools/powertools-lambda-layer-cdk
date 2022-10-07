FROM public.ecr.aws/lambda/python:3.8

ARG PACKAGE_SUFFIX=''

USER root
WORKDIR /tmp

# PACKAGE_SUFFIX = '[all]==2.0.0'
# PACKAGE_SUFFIX = '[all]'
# PACKAGE_SUFFIX = '=='2.0.0'
# PACKAGE_SUFFIX = ''

RUN yum update -y && yum install -y zip unzip wget tar gzip binutils

# Install build essentials
RUN yum install -y \
  boost-devel \
  jemalloc-devel \
  bison \
  make \
  gcc \
  gcc-c++ \
  flex \
  autoconf \
  zip \
  git \
  ninja-build

# Install cython to generate native code
RUN pip install --upgrade pip wheel && pip install --upgrade cython

RUN CFLAGS="-Os -g0 -s" pip install --no-binary pydantic -t /asset/python aws-lambda-powertools$PACKAGE_SUFFIX

# Removing nonessential files
RUN cd /asset && \
  # remove boto3 and botocore (already available in Lambda Runtime)
  rm -rf python/boto* && \
  # remove boto3 dependencies
  rm -rf python/s3transfer* python/*dateutil* python/urllib3* python/six* python/jmespath* && \
  # remove debugging symbols
  find python -name '*.so' -type f -exec strip "{}" \; && \
  # remove tests
  find python -wholename "*/tests/*" -type f -delete && \
  # remove python bytecode
  find python -regex '^.*\(__pycache__\|\.py[co]\)$' -delete
