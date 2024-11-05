import React from 'react';
import styles from './styles.module.css'; 
import ServiceCard from "../_components/ServiceCard";


const ServicesPage: React.FC = () => {
  return (
    <div className="{styles.servicesPage}">
      <h1>Услуги</h1>
      <ServiceCard title="Услуга 1" description="Описание услуги 1" />
      <ServiceCard title="Услуга 2" description="Описание услуги 2" />
    </div>
  );
};

export default ServicesPage;