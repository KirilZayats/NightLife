docker-compose -f "docker-compose.yml" down --remove-orphans --rmi local
docker-compose -f "docker-compose.yml" rm -f -v
docker-compose -f "docker-compose.yml" up