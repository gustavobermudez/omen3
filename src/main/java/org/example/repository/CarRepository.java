package org.example.repository;

import org.example.domain.Car;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Car entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

}
