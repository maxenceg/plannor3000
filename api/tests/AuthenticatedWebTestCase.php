<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Client;

class AuthenticatedWebTestCase extends WebTestCase
{
    /**
     * Create a client with a default Authorization header.
     *
     * @param string $username
     * @param string $password
     *
     * @return \Symfony\Bundle\FrameworkBundle\Client
     */
    protected function createAuthenticatedClient(string $username = 'jean_moust', string $password = 'lolilol'): Client
    {
        $client = static::createClient();
        $client->request(
            'POST',
            'login_check',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            sprintf('{"username": "%s", "password": "%s"}', $username, $password)
        );

        $this->assertTrue($client->getResponse()->isOk(), 'Authentication failed, check that the provided credentials are valid and that the authentication works.');

        $data = json_decode($client->getResponse()->getContent(), true);

        $client = static::createClient();
        $client->setServerParameter('HTTP_Authorization', sprintf('Bearer %s', $data['token']));

        return $client;
    }
}
