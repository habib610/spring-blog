package com.example.springblog.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

public interface FileService {
    String uploadFile(String filePath, MultipartFile file) throws IOException;
    InputStream getFileResource(String path, String filename) throws FileNotFoundException;
}
