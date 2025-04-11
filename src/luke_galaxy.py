# luke_galaxy.py - Yoda builds decision for Luke’s galaxy
print("Galactic Alert - Yoda Guides Luke")

# Threat data (example - adjust, you may)
fleet_size = 10          # Number of Imperial ships
distance = 500           # Light-years away
weapons_active = True    # Are they armed?

# Decision logic with if-else and logical operators
if fleet_size >= 5 and distance <= 1000 and weapons_active:
    print("Danger, it is! Imperial fleet threatens!")
    print(f"Size: {fleet_size} ships, Distance: {distance} ly, Weapons: Active")
    if fleet_size > 20:
        print("Massive, the threat is—evacuate planets, we must!")
    elif distance < 100:
        print("Close, they are—fight now, Luke, or flee!")
    else:
        print("Prepare, we shall—rebels alert, defenses raise!")
elif fleet_size >= 5 and distance > 1000 and weapons_active:
    print(f"Fleet strong ({fleet_size}), but far ({distance} ly)—watch, we will.")
elif fleet_size < 5 and weapons_active:
    print(f"Small force ({fleet_size})—weapons active, yet weak they are.")
elif fleet_size >= 5 and not weapons_active:
    print(f"Ships many ({fleet_size}), but unarmed—peaceful, perhaps?")
else:
    print("No threat, I sense—size small, far, unarmed they are.")
    print(f"Size: {fleet_size}, Distance: {distance}, Weapons: Off")

# Yoda’s wisdom
if distance < 500 or fleet_size > 15:
    print("Vigilant, we stay—Force warns of peril, hmm!")