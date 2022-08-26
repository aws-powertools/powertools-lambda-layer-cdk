FROM public.ecr.aws/lambda/nodejs:16



ARG PACKAGE_SUFFIX=''

USER root
WORKDIR /tmp

RUN yum update -y && yum install -y zip unzip wget tar gzip

RUN npm install --prefix /asset/nodejs @aws-lambda-powertools/metrics$PACKAGE_SUFFIX @aws-lambda-powertools/tracer$PACKAGE_SUFFIX @aws-lambda-powertools/logger$PACKAGE_SUFFIX