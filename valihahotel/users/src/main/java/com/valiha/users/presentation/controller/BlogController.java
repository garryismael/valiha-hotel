package com.valiha.users.presentation.controller;

import com.valiha.users.application.dto.blog.BlogRequestDto;
import com.valiha.users.application.dto.blog.BlogResponseDto;
import com.valiha.users.application.useCase.blog.DeleteBlogUseCase;
import com.valiha.users.application.useCase.blog.FindAllBlogsUseCase;
import com.valiha.users.application.useCase.blog.FindOneBlogUseCase;
import com.valiha.users.infrastructure.services.BlogService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import java.security.Principal;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/blogs")
public class BlogController {

  private final BlogService blogService;
  private final FindAllBlogsUseCase findAllUseCase;
  private final FindOneBlogUseCase findOneUseCase;
  private final DeleteBlogUseCase deleteUseCase;

  public BlogController(
    BlogService blogService,
    FindAllBlogsUseCase findAllUseCase,
    FindOneBlogUseCase findOneUseCase,
    DeleteBlogUseCase deleteUseCase
  ) {
    this.blogService = blogService;
    this.findAllUseCase = findAllUseCase;
    this.findOneUseCase = findOneUseCase;
    this.deleteUseCase = deleteUseCase;
  }

  @GetMapping
  public List<BlogResponseDto> getBlogs() {
    return findAllUseCase.execute();
  }

  @GetMapping("/{id}")
  public BlogResponseDto getBlog(@PathVariable String id) {
    return findOneUseCase.execute(id);
  }

  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public Mono<BlogResponseDto> create(
    @AuthenticationPrincipal OAuth2User oauthPrincipal,
    @RequestBody BlogRequestDto requestDto,
    @RequestPart(name = "image") Mono<FilePart> monoFilePart,
    Principal principal
  ) {
    return blogService.createBlog(requestDto, monoFilePart, principal);
  }

  @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public Mono<BlogResponseDto> updateBlog(
    @PathVariable String id,
    @RequestBody BlogRequestDto requestDto,
    @RequestPart(name = "image", required = false) Mono<FilePart> filePartMono
  ) {
    return this.blogService.editBlog(id, requestDto, filePartMono);
  }

  @DeleteMapping("/{id}")
  public void deleteBlog(@PathVariable String id) {
    this.deleteUseCase.execute(id);
  }
}
