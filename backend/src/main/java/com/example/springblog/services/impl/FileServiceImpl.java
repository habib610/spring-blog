package com.example.springblog.services.impl;

import com.example.springblog.services.FileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {

    @Override
    public String uploadFile(String path, MultipartFile file) throws IOException {

//        Take File Name
        String name = file.getOriginalFilename();


//Random filename
        String randomUUID = UUID.randomUUID().toString();
        String fileName1 = randomUUID.concat(name.substring(name.lastIndexOf(".")));

//        Full Path
        String filePath = path + File.separator + fileName1;


//        Create Folder if not exist
        File file1 = new File(path);
        if (!file1.exists()) {
            file1.mkdir();
        }

//        Copy the File
        Files.copy(file.getInputStream(), Paths.get(filePath));
        return fileName1;
    }

    @Override
    public InputStream getFileResource(String path, String filename) throws FileNotFoundException {
        String fullpath = path + File.separator + filename;
        InputStream inputStream = new FileInputStream(fullpath);
        return inputStream;
    }
}
