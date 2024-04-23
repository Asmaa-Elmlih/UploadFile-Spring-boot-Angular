package com.example.UploadFiles.repositories;

import com.example.UploadFiles.entities.UploadFile;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UploadFileRepository extends JpaRepository<UploadFile,Long>{
}
