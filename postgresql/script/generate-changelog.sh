liquibase
    --driver=org.postgresql.Driver \
    --classpath=./../vendor/postgresql-9.4.1212.jar \
    --changeLogFile=./../migration/base.xml \
    --url="jdbc:postgresql://localhost:5432/twitter.com" \
    --username=postgres \
    --password='' \
    generateChangelog