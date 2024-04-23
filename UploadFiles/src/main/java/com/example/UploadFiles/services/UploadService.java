package com.example.UploadFiles.services;

import com.example.UploadFiles.entities.UploadFile;
import com.example.UploadFiles.repositories.UploadFileRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadService {
    private final UploadFileRepository repository;

    public UploadService(UploadFileRepository repository) {
        this.repository = repository;
    }

    public void saveFile(MultipartFile[] files) {
        for (MultipartFile file : files) {
            UploadFile uploadFile = new UploadFile();
            uploadFile.setSize(file.getSize());
            uploadFile.setName(file.getOriginalFilename());
            repository.save(uploadFile);
        }
    }
}
