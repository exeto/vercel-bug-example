"use server";

// Runtime: AWS_DEFAULT_REGION=us-east-1
// Build time: AWS_DEFAULT_REGION is not set
// The build is successful, but when calling the server action, we get a 405 error instead of a 500.
if (process.env.AWS_DEFAULT_REGION) {
  throw new Error("Example error");
}

export async function action() {
  // If we throw an error here, everything will work correctly and return a 500 error.
  return 42;
}
