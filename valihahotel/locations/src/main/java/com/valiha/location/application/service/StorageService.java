package com.valiha.location.application.service;

import java.io.File;
import java.io.IOException;

public interface StorageService {
  String upload(File file, String path) throws IOException;
}
