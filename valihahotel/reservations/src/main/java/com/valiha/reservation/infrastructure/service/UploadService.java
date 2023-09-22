package com.valiha.reservation.infrastructure.service;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.codec.multipart.FilePart;

import reactor.core.publisher.Mono;

public class UploadService {
    @Value("${upload.directory}")
    private String UPLOAD_DIRECTORY;

    public Mono<String> upload(FilePart fp) {
        Path basePath = Paths.get(UPLOAD_DIRECTORY);
        String originalFilename = fp.filename();
        String uniqueFilename = String.format("%s_%s", Instant.now().toEpochMilli(), originalFilename);
        Path targetPath = basePath.resolve(uniqueFilename);
        return fp.transferTo(targetPath).thenReturn(targetPath.toString());
    }

}
