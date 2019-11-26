var member  = require('../models/member');


var memberController = {
    getMember(req,res){
    member.findAll()
    .then(function(dataa){
        res.render('home',{data:dataa})
    })
  .catch(error=>console.log(`error occurred`,error));
    },
    addMember(req,res){
        console.log(req.body)
          member.create({name:req.body.name,country:req.body.country,
          language:req.body.language,salary:req.body.salary})
        .then(function(dataa){res.redirect('/member/getall')})
        .catch(function(error){
        console.log(`error occured`,err)
        });
      },
      editMember(req,res){
        console.log('id',req.params.id)
        member.findOne({where:{mid:req.params.id},raw: true})
        .then(function(dataa){
          if(!dataa){
            res.render('edit',{data:{}})
          }
          else{
            var x = JSON.stringify(dataa)
            console.log(JSON.parse(x))
            var temp=[];
            temp.push(JSON.parse(x))
            console.log('sd',temp)
            res.render('edit',{data:temp})
          }
      }).catch(function(error){
        console.log('error occured',error)
      })
    },
    updateMember(req,res){
        console.log(req.body)
        const query={
            name:req.body.name,
            country:req.body.country,
            language:req.body.language,
            salary:req.body.salary
        }
        member.update(query,{where:{mid:req.body.id}})
        .then(function(data){
          res.redirect('/member/getall')
        })
        .catch(function(error){
        console.log('error occured',error)
        });  
    },
    deleteMember(req,res){
      console.log('delid',req.params.id)
        member.destroy({where:{mid:req.params.id}})
        .then(function(dataa){
          res.redirect('/member/getall')
        })
        .catch(function(error){
         console.log('error occured',error)
      });
    },
}

module.exports = memberController;