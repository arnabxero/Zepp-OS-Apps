#include <Servo.h>

Servo serv;

int sensor_trigger_val = 155;
int sensor_touch_val = 148;

int claw_full_open_angle = 5;
int claw_close_max_angle = 115;

int start_button = 16;
int reset_button = 17;

int current_pos = claw_full_open_angle;
int sensor_pin = A6;

int servo_attached_pin = 2;
int servo_angle_set_delay = 100; // in ms
int servo_angle_increment = 1;

int run_servo = 0;

int change = 1;

int servo_angle_change = 0;

int max_servo_angle_change = -1;

void setup()
{
  pinMode(start_button, INPUT_PULLUP);
  pinMode(reset_button, INPUT_PULLUP);
  pinMode(sensor_pin, INPUT_PULLUP);
  Serial.begin(9600);
  serv.attach(2);
  serv.write(claw_full_open_angle);
}

void loop()
{

  Serial.print(current_pos);
  Serial.print('\t');
  Serial.print(analogRead(sensor_pin));
  Serial.print('\t');

  if (digitalRead(reset_button) == LOW)
  {
    max_servo_angle_change = -1;
    servo_angle_change = 0;
    run_servo = 0;
    current_pos = claw_full_open_angle;
    serv.write(current_pos);
    change = servo_angle_increment;
  }
  if (digitalRead(start_button) == LOW)
  {
    run_servo = 1;
  }

  if (run_servo == 1)
  {

    if (analogRead(sensor_pin) >= sensor_trigger_val)
    {
      change = 0;
    }

    if (analogRead(sensor_pin) < sensor_trigger_val)
    {
      change = servo_angle_increment;
    }

    current_pos = current_pos + change;
    if (current_pos > claw_close_max_angle)
    {
      current_pos = claw_close_max_angle;
    }
    else
    {
      if (analogRead(sensor_pin) > sensor_touch_val && analogRead(sensor_pin) < sensor_trigger_val)
      {
        servo_angle_change = servo_angle_change + change;
      }
    }
    if (servo_angle_change > max_servo_angle_change)
    {
      max_servo_angle_change = servo_angle_change;
    }

    delay(servo_angle_set_delay);
    serv.write(current_pos);
  }

  Serial.println(max_servo_angle_change);
}