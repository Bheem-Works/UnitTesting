        function greetDevelopers(list){
            return list.map(dev => ({
                ...dev,
                greeting:`Hi${dev.firstName}, what do you like most about ${dev.langauge}?`
            }))
        }

        