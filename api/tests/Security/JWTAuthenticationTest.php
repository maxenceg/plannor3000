<?php

namespace App\Tests\Security;

use App\Tests\AuthenticatedWebTestCase;
use Hautelook\AliceBundle\PhpUnit\RefreshDatabaseTrait;
use Symfony\Component\HttpFoundation\Response;

class JWTAuthenticationTest extends AuthenticatedWebTestCase
{
    use RefreshDatabaseTrait;

    /**
     * @test
     */
    public function itShouldAuthenticateTheUser()
    {
        // Without any JWT, the request should be unauthorized

        $client = static::createClient();
        $client->request(
            'GET',
            '/users'
        );
        $this->assertEquals(Response::HTTP_UNAUTHORIZED, $client->getResponse()->getStatusCode());

        // With a JWT, it should pass

        $client = $this->createAuthenticatedClient();
        $client->request(
            'GET',
            '/users'
        );
        $this->assertTrue($client->getResponse()->isOk());
        $this->assertFalse($client->getResponse()->isEmpty());
    }
}
