# Space API Communications: Setting Up Axios Instances

Stellar Navigator, you're doing fantastic! Now, let's configure an **Axios instance** to fetch author data with a base URL. This approach will make your code cleaner should you decide to make additional calls to the same API later on. Create an Axios instance using `axios.create()` and set the `baseURL`. Then, use this instance to replace the direct `axios.get` call in your useEffect.
