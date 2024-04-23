package com.example.UploadFiles.controllers;

import com.example.UploadFiles.services.UploadService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/files")
@CrossOrigin(origins = "http://localhost:4200")
public class UploadFileController {
    private final UploadService service;

    public UploadFileController(UploadService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Void> uploadFile(@RequestParam MultipartFile[] files){
            service.saveFile(files);
            return new ResponseEntity<>(HttpStatus.CREATED);

    }
}
