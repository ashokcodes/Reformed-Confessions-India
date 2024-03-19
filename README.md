# Building the Image

```
docker build . -t svelte-docker
```

# Running the Image
```
docker run --rm -d --name=svelte-docker -p 5000:80 svelte-docker
```