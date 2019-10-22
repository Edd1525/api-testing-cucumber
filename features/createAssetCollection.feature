Feature: Create Asset Collection for Compass

    Scenario: Create Asset Collection for Compass
        Given a valid admin user
        And a valid integration
        And a valid device
        And a valid vehicle
        When the device is associated to the vehicle 
        Then the asset collection should be created.