import { Body, Controller, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto/auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post("signup")
  signup(@Body() dto: AuthDTO) {
    console.log(dto)
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  signin(@Body() dto: AuthDTO) {
    return this.authService.signin(dto);
  }
}