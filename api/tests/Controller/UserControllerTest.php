<?php

namespace App\Tests\Controller;

use App\Tests\AuthenticatedWebTestCase;
use Hautelook\AliceBundle\PhpUnit\ReloadDatabaseTrait;
use Symfony\Component\HttpFoundation\Response;

class UserControllerTest extends AuthenticatedWebTestCase
{
    use ReloadDatabaseTrait;

    public function testUnauthenticatedMeRoute()
    {
        // Route should be forbidden when not authenticated

        $client = static::createClient();
        $client->request(
            'GET',
            '/me'
        );
        $this->assertEquals(Response::HTTP_UNAUTHORIZED, $client->getResponse()->getStatusCode());
    }

    public function testAuthenticatedMeRoute()
    {
        // Route should return the user when authenticated

        $client = $this->createAuthenticatedClient();
        $client->request(
            'GET',
            '/me'
        );
        $this->assertTrue($client->getResponse()->isOk());

        $user = json_decode($client->getResponse()->getContent(), true);

        $this->assertEquals('jean_moust', $user['username']);
    }
}
