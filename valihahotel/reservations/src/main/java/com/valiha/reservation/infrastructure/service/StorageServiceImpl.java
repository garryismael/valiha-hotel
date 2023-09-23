package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.service.StorageService;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.codec.multipart.FilePart;
import reactor.core.publisher.Mono;

public class StorageServiceImpl implements StorageService {

  @Value("${upload.directory}")
  private String UPLOAD_DIRECTORY;

  public static Mono<File> convertToMonoFile(FilePart filePart) {
    try {
      // Create a temporary file
      File tempFile = File.createTempFile("upload-", "-" + filePart.filename());

      // Copy the content of the FilePart to the temporary file
      Path tempFilePath = tempFile.toPath();
      return filePart.transferTo(tempFilePath).thenReturn(tempFile);
    } catch (IOException e) {
      return Mono.error(e);
    }
  }

  @Override
  public String upload(File file, String path) throws IOException {
    File directory = new File(UPLOAD_DIRECTORY, path);
    if (!directory.exists()) {
      directory.mkdirs();
    }

    // Define the target file path
    Path targetPath = Paths.get(UPLOAD_DIRECTORY, file.getName());

    // Copy the file to the storage directory
    Files.copy(file.toPath(), targetPath, StandardCopyOption.REPLACE_EXISTING);

    return file.getName();
  }
}
