package com.juniorbatista.erp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juniorbatista.erp.model.Usuario;

public interface ChamadoRepository extends JpaRepository<Usuario, Long> {
	
	Optional<Usuario> findByEmail(String email);
	
	Optional<Usuario> findByNomeAndEmail(String nome, String email);
	
}
