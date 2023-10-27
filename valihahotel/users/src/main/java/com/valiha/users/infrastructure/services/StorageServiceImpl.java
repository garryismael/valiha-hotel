package com.valiha.users.infrastructure.services;

import com.valiha.users.application.service.StorageService;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

public class StorageServiceImpl implements StorageService {

  @Value("${upload.directory}")
  private String UPLOAD_DIRECTORY;

  public static File convertToFile(MultipartFile multipartFile) {
    try {
      // Create a temporary file
      File tempFile = File.createTempFile(
        "upload-",
        "-" + multipartFile.getOriginalFilename()
      );

      // Copy the content of the FilePart to the temporary file
      Path tempFilePath = tempFile.toPath();
      multipartFile.transferTo(tempFilePath);
      return tempFile;
    } catch (IOException e) {
      return null;
    }
  }

  @Override
  public String upload(File file, String path) throws IOException {
    File directory = new File(UPLOAD_DIRECTORY, path);
    if (!directory.exists()) {
      directory.mkdirs();
    }

    // Define the target file path
    Path targetPath = Paths.get(UPLOAD_DIRECTORY, path, file.getName());

    // Copy the file to the storage directory
    Files.copy(file.toPath(), targetPath, StandardCopyOption.REPLACE_EXISTING);

    return String.format("%s/%s", path, file.getName());
  }
}
