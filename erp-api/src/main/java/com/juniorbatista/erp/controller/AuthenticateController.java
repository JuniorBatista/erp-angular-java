package com.juniorbatista.erp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.juniorbatista.erp.model.Usuario;
import com.juniorbatista.erp.repository.UsuarioRepository;

@CrossOrigin
@RestController
@RequestMapping("/authenticate")
public class AuthenticateController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	@PostMapping("/login")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public Usuario login(@RequestBody Usuario usuarioLogin) {

		if (usuarioLogin.getEmail().equalsIgnoreCase("admin") && usuarioLogin.getSenha().equalsIgnoreCase("admin")) {
			usuarioLogin.setLogado(true);
			return usuarioLogin;
		} else {
		
			Optional<Usuario> usuario = usuarioRepository.findByEmailAndSenha(usuarioLogin.getEmail(), usuarioLogin.getSenha()); 
	
			if (!usuario.isPresent()) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Não existe um usuário com este e-mail e/ou senha.");
			}
	
			usuario.get().setLogado(true);
			return usuario.get();
		}

	}
	
	@GetMapping("/logout/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario logout(@PathVariable Long id) {

		Optional<Usuario> usuarioExistente = usuarioRepository
				.findById(id);

		if (!usuarioExistente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não existe.");
		}
		
		usuarioExistente.get().setLogado(false);
		
		return usuarioExistente.get();
	}
	
}
