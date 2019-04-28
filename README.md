Docker:

    sudo docker build -t reactapp:v1 .

    sudo docker run -it --rm -p 3000:3000 reactapp:v1


Kubernetes

    ** minikube start **

    eval $(minikube docker-env)

    sudo docker build -t reactapp:v1 .

    kubectl create -f reactapp-app.yaml

    kubectl create -f reactapp-deployment.yaml

    kubectl create -f reactapp-service.yaml

URLS:

    minikube service list

    minikube service reactapp --url
