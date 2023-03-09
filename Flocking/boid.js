
class Boid {
    constructor(){
        this.pos = createVector(random (width), random (height));
        this.vel = p5.Vector.random2D();
        this.acc = createVector();
        this.vel.setMag(random(2,4));
         this.MaxForce = 0.5;
         this.Maxspeed = 4;
    }

    edges(){
       
        if(this.pos.x > width){
            this.pos.x = 0;
        }
        else if (this.pos.x < 0){
            this.pos.x = width;
        }
        if(this.pos.y > height){
            this.pos.y = 0;
        }
        else if (this.pos.y < 0){
            this.pos.y = height;
        }
    }

    align(boids){
        let perceptionradius = 50;
        let steering = createVector();
        let total = 0;
        for (let other of boids){
            let d = dist(this.pos.x, this.pos.y, other.pos.x, this.pos.y);
            if(other != this && d < perceptionradius){
                steering.add(other.vel);
                total++;
            }
        }
        if(total>0){
            steering.div(total);
            steering.setMag(this.Maxspeed);
            steering.sub(this.vel);
            steering.limit(this.MaxForce)
        }
        return steering;
    }

    cohesion(boids){
        let perceptionradius = 50;
        let steering = createVector();
        let total = 0;
        for (let other of boids){
            let d = dist(this.pos.x, this.pos.y, other.pos.x, this.pos.y);
            if(other != this && d < perceptionradius){
                steering.add(other.pos);
                total++;
            }
        }
        
        if(total>0){
            steering.div(total);
            steering.sub(this.pos);
            steering.setMag(this.Maxspeed);
            steering.sub(this.vel);
            steering.limit(this.MaxForce)
        }
        return steering;

    }

    separation(boids){
        let perceptionradius = 50;
        let steering = createVector();
        let total = 0;
        for (let other of boids){
            let d = dist(this.pos.x, this.pos.y, other.pos.x, this.pos.y);
            if(other != this && d < perceptionradius){
                let diff = p5.Vector.sub(this.pos, other.pos);
                diff.div(d);
                steering.add(diff);
                total++;
            }
        }
        
        if(total>0){
            steering.div(total);
            steering.setMag(this.Maxspeed);
            steering.sub(this.vel);
            steering.limit(this.MaxForce)
        }
        return steering;

    }
    
    flocks(boids){
        let cohesion = this.cohesion(boids);
        let alignment = this.align(boids);
        let separation = this.separation(boids);
        separation.mult(SeparationSlider.value());
        alignment.mult(AlignSlider.value());
        cohesion.mult(CohesionSlider.value());
        this.acc.add(cohesion);
        this.acc.add(alignment);
        this.acc.add(separation);
    }

    update(){
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.vel.limit(this.Maxspeed);
        this.acc.mult(0);  
    }

    show(){
        stroke(255);
        fill(255, 100);
        triangle(this.pos.x, this.pos.y - 4, this.pos.x + 4, this.pos.y + 4, this.pos.x - 4, this.pos.y + 4);

    }
}