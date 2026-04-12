# Deploying Gokul D Portfolio to AWS S3

## Prerequisites
- AWS CLI installed and configured (`aws configure`)
- An AWS account with S3 permissions

## Steps

### 1. Create an S3 Bucket
```bash
aws s3 mb s3://YOUR-BUCKET-NAME --region ap-south-1
```

### 2. Enable Static Website Hosting
```bash
aws s3 website s3://YOUR-BUCKET-NAME \
  --index-document index.html \
  --error-document index.html
```

### 3. Apply the Bucket Policy
Edit `bucket-policy.json` — replace `BUCKET_NAME` with your actual bucket name, then:
```bash
aws s3api put-bucket-policy \
  --bucket YOUR-BUCKET-NAME \
  --policy file://deploy/bucket-policy.json
```

### 4. Upload Site Files
From the `p2/` directory:
```bash
aws s3 sync . s3://YOUR-BUCKET-NAME \
  --exclude "node_modules/*" \
  --exclude "tests/*" \
  --exclude "deploy/*" \
  --exclude "package*.json" \
  --exclude ".gitkeep"
```

### 5. Access Your Site
Your site will be available at:
```
http://YOUR-BUCKET-NAME.s3-website.ap-south-1.amazonaws.com
```

## Deploying to AWS Amplify (Recommended)

1. Push the `p2/` folder contents to a GitHub repository
2. Go to AWS Amplify Console → New App → Host Web App
3. Connect your GitHub repo
4. Set the build settings to "No build required" (static site)
5. Deploy — Amplify provides a free HTTPS URL automatically

## Profile Photo
Before deploying, copy your profile photo to `p2/assets/profile.jpg`.
