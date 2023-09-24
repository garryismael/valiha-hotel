package com.valiha.location;

import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.reactive.context.AnnotationConfigReactiveWebServerApplicationContext;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ClassPathBeanDefinitionScanner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.core.type.filter.TypeFilter;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@SpringBootApplication
@EnableFeignClients
public class LocationsApplication {

  public static void main(String[] args) {
    SpringApplication.run(LocationsApplication.class, args);
  }

  @Bean
  RouterFunction<ServerResponse> imgRouter() {
    return RouterFunctions.resources(
      "/uploads/**",
      new ClassPathResource("uploads/")
    );
  }

  @Bean
  BeanFactoryPostProcessor beanFactoryPostProcessor(
    ApplicationContext beanRegistry
  ) {
    return beanFactory -> {
      genericApplicationContext(
        (BeanDefinitionRegistry) (
          (AnnotationConfigReactiveWebServerApplicationContext) beanRegistry
        ).getBeanFactory()
      );
    };
  }

  void genericApplicationContext(BeanDefinitionRegistry beanRegistry) {
    ClassPathBeanDefinitionScanner beanDefinitionScanner = new ClassPathBeanDefinitionScanner(
      beanRegistry
    );
    beanDefinitionScanner.addIncludeFilter(removeModelAndEntitiesFilter());
    beanDefinitionScanner.scan("com.valiha.location");
  }

  static TypeFilter removeModelAndEntitiesFilter() {
    return (MetadataReader mr, MetadataReaderFactory mrf) -> {
      String className = mr.getClassMetadata().getClassName();
      return (
        !className.endsWith("Dto") &&
        !className.endsWith("ApiErrorException") &&
        !className.endsWith("PaymentState") &&
        !className.endsWith("LocationState") &&
        !className.endsWith("ErrorResponse")
      );
    };
  }
}
