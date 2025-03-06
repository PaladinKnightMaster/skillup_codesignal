# Handling a concert attendance scenario with multiple conditions
attendee = {
    "ticket" => true,
    "age" => 16,
    "parental_consent" => true
}

if attendee['ticket']
    if attendee['age'] >= 18 || attendee['parental_consent']
        puts "You are allowed to attend the concert."
    else
        puts "Parental consent is required for attendees under 18."
    end
else
    puts "Attendance is not allowed without a ticket."
end