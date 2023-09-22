package com.valiha.users.infrastructure.services;

import com.valiha.users.application.service.StorageService;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import org.springframework.beans.factory.annotation.Value;

public class StorageServiceImpl implements StorageService {

  @Value("${upload.directory}")
  private String UPLOAD_DIRECTORY;

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
