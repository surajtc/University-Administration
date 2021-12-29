export function hostURL() {
  if (process.env.NODE_ENV == "development") {
    return "http://localhost:3000/"
  } else {
    return "https://university-administration.vercel.app/"
  }
}
