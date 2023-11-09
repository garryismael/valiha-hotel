package com.valiha.users;

import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContext;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ClassPathBeanDefinitionScanner;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.core.type.filter.TypeFilter;

@SpringBootApplication
public class UsersApplication {

  public static void main(String[] args) {
    SpringApplication.run(UsersApplication.class, args);
  }

  @Bean
  BeanFactoryPostProcessor beanFactoryPostProcessor(
    ApplicationContext beanRegistry
  ) {
    return beanFactory -> {
      genericApplicationContext(
        (BeanDefinitionRegistry) (
          (AnnotationConfigServletWebServerApplicationContext) beanRegistry
        ).getBeanFactory()
      );
    };
  }

  void genericApplicationContext(BeanDefinitionRegistry beanRegistry) {
    ClassPathBeanDefinitionScanner beanDefinitionScanner = new ClassPathBeanDefinitionScanner(
      beanRegistry
    );
    beanDefinitionScanner.addIncludeFilter(removeModelAndEntitiesFilter());
    beanDefinitionScanner.scan("com.valiha.users");
  }

  static TypeFilter removeModelAndEntitiesFilter() {
    return (MetadataReader mr, MetadataReaderFactory mrf) -> {
      String className = mr.getClassMetadata().getClassName();
      return (
        !className.endsWith("Dto") &&
        !className.endsWith("ApiErrorException") &&
        !className.endsWith("ErrorResponse")
      );
    };
  }
}
