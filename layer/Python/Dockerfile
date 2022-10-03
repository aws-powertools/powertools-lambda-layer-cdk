FROM public.ecr.aws/lambda/python:3.8

ARG PACKAGE_SUFFIX=''

USER root
WORKDIR /tmp

# PACKAGE_SUFFIX = '[extras]==1.23.0'
# PACKAGE_SUFFIX = '[extras]'
# PACKAGE_SUFFIX = '=='1.23.0'
# PACKAGE_SUFFIX = ''

RUN yum update -y && yum install -y zip unzip wget tar gzip

RUN pip install -t /asset/python aws-lambda-powertools$PACKAGE_SUFFIX

# Removing nonessential files
RUN cd /asset && \
  rm -rf python/boto* && \
  # remove debugging symbols
  find python -name '*.so' -type f -exec strip "{}" \; && \
  find python -wholename "*/tests/*" -type f -delete && \
  find python -regex '^.*\(__pycache__\|\.py[co]\)$' -delete && \
  zip -r9 aws-lambda-powertools.zip ./python && \
  rm -rf ./python