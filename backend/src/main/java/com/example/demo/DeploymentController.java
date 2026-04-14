package com.example.demo;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/deployment")
public class DeploymentController {

    @Value("${app.environment:production}")
    private String environment;

    @Value("${app.version:1.0.0}")
    private String version;

    @GetMapping("/status")
    public Map<String, String> getDeploymentStatus() {
        return Map.of(
                "status", "UP",
                "message", "App is working successfully!",
                "environment", environment,
                "version", version);
    }
}
