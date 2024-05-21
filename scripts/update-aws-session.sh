# Get session token and extract the credentials
SESSION_INFO=$(aws sts get-session-token --duration-seconds 3600)

# Set environment variables
export AWS_ACCESS_KEY_ID=$(echo $SESSION_INFO | jq -r '.Credentials.AccessKeyId')
export AWS_SECRET_ACCESS_KEY=$(echo $SESSION_INFO | jq -r '.Credentials.SecretAccessKey')
export AWS_SESSION_TOKEN=$(echo $SESSION_INFO | jq -r '.Credentials.SessionToken')

# Verify the environment variables
echo "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID"
echo "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY"
echo "AWS_SESSION_TOKEN=$AWS_SESSION_TOKEN"
