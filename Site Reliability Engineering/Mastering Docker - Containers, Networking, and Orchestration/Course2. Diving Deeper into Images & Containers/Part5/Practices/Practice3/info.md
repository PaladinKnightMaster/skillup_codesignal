## File Roundtrip with Docker Container

You're set to embark on a "round trip" transfer of files between your host and a Docker container. There's already a running container named `ubuntu-container` and an existing file named `practice_file.txt` on your host.

1. **Copy from Host to Container**:
    - Begin by using the `docker cp` command to copy `practice_file.txt` from your host into the container named `ubuntu-container`.
    - Save it in the container as `/container_practice_file.txt`.

2. **Copy back from Container to Host**:
    - Now, bring that file back by copying `/container_practice_file.txt` from `ubuntu-container` to the host once again.
    - Save it back on your host as `round_trip_file.txt`.

Once you're confident the journey is complete, press `Submit` to check if the round trip was successful and to wrap it up.