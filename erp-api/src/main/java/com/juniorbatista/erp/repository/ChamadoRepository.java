package com.juniorbatista.erp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juniorbatista.erp.model.Chamado;

public interface ChamadoRepository extends JpaRepository<Chamado, Long> {
	
	Optional<Chamado> findById(Long id);
	
}
