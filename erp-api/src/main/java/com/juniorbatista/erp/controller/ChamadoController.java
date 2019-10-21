package com.juniorbatista.erp.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.juniorbatista.erp.model.Chamado;
import com.juniorbatista.erp.repository.ChamadoRepository;

@CrossOrigin
@RestController
@RequestMapping("/chamado")
public class ChamadoController {
	
	@Autowired
	private ChamadoRepository chamadoRepository;
	
	@GetMapping
	public List<Chamado> listar() {
		return chamadoRepository.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Chamado> buscar(@PathVariable Long id) {
		
		Optional<Chamado> chamado = chamadoRepository.findById(id); 

		if (chamado.isEmpty()) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(chamado.get());

	}
	
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping
	public Chamado adicionar(@Valid @RequestBody Chamado chamado) {
		System.out.println("chamado.toString()");
		System.out.println(chamado.toString());
		return chamadoRepository.save(chamado);
	}
	
}
