-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema digitalcars
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema digitalcars
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `digitalcars` DEFAULT CHARACTER SET utf8mb4 ;
USE `digitalcars` ;

-- -----------------------------------------------------
-- Table `digitalcars`.`colores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`colores` (
  `id_color` INT(11) NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_color`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `digitalcars`.`autos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`autos` (
  `id_auto` INT(11) NOT NULL AUTO_INCREMENT,
  `modelo` VARCHAR(45) NOT NULL,
  `anio` INT(11) NOT NULL,
  `precio` INT(11) NOT NULL,
  `color_id` INT(11) NOT NULL,
  PRIMARY KEY (`id_auto`),
  
  CONSTRAINT `autos_ibfk_1`
    FOREIGN KEY (`color_id`)
    REFERENCES `digitalcars`.`colores` (`id_color`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `digitalcars`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`roles` (
  `id_rol` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `digitalcars`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`usuarios` (
  `id_usuario` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  `fdn` DATE NOT NULL,
  `rol_id` INT(11) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  CONSTRAINT `usuarios_ibfk_1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `digitalcars`.`roles` (`id_rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `digitalcars`.`ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`ventas` (
  `id_venta` INT(11) NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `id_usuario` INT(11) NOT NULL,
  `id_auto` INT(11) NOT NULL,
  `importe` INT(11) NOT NULL,
  PRIMARY KEY (`id_venta`),

  CONSTRAINT `ventas_ibfk_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `digitalcars`.`usuarios` (`id_usuario`),
  CONSTRAINT `ventas_ibfk_2`
    FOREIGN KEY (`id_auto`)
    REFERENCES `digitalcars`.`autos` (`id_auto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
 /*-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema digitalcars
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema digitalcars
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `digitalcars` DEFAULT CHARACTER SET utf8mb4 ;
USE `digitalcars` ;

-- -----------------------------------------------------
-- Table `digitalcars`.`colores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`colores` (
  `id_color` INT(11) NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_color`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `digitalcars`.`autos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`autos` (
  `id_auto` INT(11) NOT NULL AUTO_INCREMENT,
  `modelo` VARCHAR(45) NOT NULL,
  `anio` INT(11) NOT NULL,
  `precio` INT(11) NOT NULL,
  `foto` VARCHAR(255) NULL DEFAULT NULL,
  `color_id` INT(11) NOT NULL,
  PRIMARY KEY (`id_auto`),
  INDEX `autos_ibfk_1` (`color_id` ASC) VISIBLE,
  CONSTRAINT `autos_ibfk_1`
    FOREIGN KEY (`color_id`)
    REFERENCES `digitalcars`.`colores` (`id_color`))
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `digitalcars`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`roles` (
  `id_rol` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `digitalcars`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`usuarios` (
  `id_usuario` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  `fdn` DATE NOT NULL,
  `foto` VARCHAR(45) NULL DEFAULT NULL,
  `rol_id` INT(11) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `rol_id` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `usuarios_ibfk_1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `digitalcars`.`roles` (`id_rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `digitalcars`.`ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalcars`.`ventas` (
  `id_venta` INT(11) NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `id_usuario` INT(11) NOT NULL,
  `id_auto` INT(11) NOT NULL,
  `importe` INT(11) NOT NULL,
  PRIMARY KEY (`id_venta`),
  INDEX `ventas_ibfk_1` (`id_usuario` ASC) VISIBLE,
  INDEX `ventas_ibfk_2` (`id_auto` ASC) VISIBLE,
  CONSTRAINT `ventas_ibfk_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `digitalcars`.`usuarios` (`id_usuario`),
  CONSTRAINT `ventas_ibfk_2`
    FOREIGN KEY (`id_auto`)
    REFERENCES `digitalcars`.`autos` (`id_auto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
*/