package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository <Order, Long>{
	
	//obj.products é da classe order. É  a coleção de produtos
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products " 
	+ "WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List <Order> findOrdesrWithProducts();
	
}
