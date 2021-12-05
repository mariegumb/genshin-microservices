package com.example.demo.service;

import com.example.demo.model.Nation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;


@Service
public class NationService {

    @Autowired
    CircuitBreakerFactory cbFactory;

    public Nation getNation(Integer nationId) {
        var restTemplate = new RestTemplate();

        return cbFactory.create("getNations").run(
            () -> restTemplate.exchange(
            "http://nation-api:3000/api/nations/" + nationId,
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<Nation>() {
        }).getBody(),
        t -> {
            System.out.println("Nation API unreachable, sending default data");
            return defaultNation();
        });

        /* WITHOUT CIRCUIT BREAKER

        return restTemplate.exchange(
            "http://nation-api:3000/api/nations/" + nationId,
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<Nation>() {
        }).getBody();

        */
    }

    private static Nation defaultNation() {
        return new Nation("Somewhere", "Someone", "some element");
    }
}
